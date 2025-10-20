import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface InstagramPost {
  id: string;
  media_url: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  caption?: string;
  permalink: string;
  like_count?: number;
  comments_count?: number;
  timestamp: string;
}

export interface InstagramResponse {
  data: InstagramPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  // Configuración para Instagram Basic Display API
  private readonly baseUrl = 'https://graph.instagram.com';
  private readonly userId = environment.instagram?.userId || 'YOUR_INSTAGRAM_USER_ID';
  private readonly accessToken = environment.instagram?.accessToken || 'YOUR_ACCESS_TOKEN';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene los posts más recientes de Instagram
   * @param limit Número de posts a obtener (máximo 25)
   * @returns Observable con los posts de Instagram
   */
  getRecentPosts(limit: number = 4): Observable<InstagramPost[]> {
    if (!this.isConfigured()) {
      console.warn('Instagram API not configured. Using placeholder data.');
      return of([]);
    }

    const fields = 'id,media_url,media_type,caption,permalink,like_count,comments_count,timestamp';
    const url = `${this.baseUrl}/${this.userId}/media?fields=${fields}&limit=${limit}&access_token=${this.accessToken}`;

    return new Observable(observer => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data: InstagramResponse) => {
          observer.next(data.data);
          observer.complete();
        })
        .catch(error => {
          console.error('Error fetching Instagram posts:', error);
          observer.error(error);
        });
    });
  }

  /**
   * Verifica si la configuración de Instagram está completa
   */
  private isConfigured(): boolean {
    return this.userId !== 'YOUR_INSTAGRAM_USER_ID' &&
           this.accessToken !== 'YOUR_ACCESS_TOKEN' &&
           this.userId.length > 0 &&
           this.accessToken.length > 0;
  }

  /**
   * Obtiene información del perfil de Instagram
   */
  getProfile(): Observable<any> {
    if (!this.isConfigured()) {
      return throwError(() => new Error('Instagram API not configured'));
    }

    const fields = 'id,username,media_count';
    const url = `${this.baseUrl}/${this.userId}?fields=${fields}&access_token=${this.accessToken}`;

    return new Observable(observer => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  /**
   * Refresca el access token (para tokens de larga duración)
   */
  refreshAccessToken(): Observable<any> {
    if (!this.isConfigured()) {
      return throwError(() => new Error('Instagram API not configured'));
    }

    const url = `${this.baseUrl}/refresh_access_token?grant_type=ig_refresh_token&access_token=${this.accessToken}`;

    return new Observable(observer => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}
