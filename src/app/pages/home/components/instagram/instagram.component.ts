import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface InstagramPost {
  id: string;
  media_url: string;
  media_type: string;
  caption?: string;
  permalink: string;
  like_count?: number;
  comments_count?: number;
  timestamp: string;
}

interface PlaceholderPost {
  image: string;
  alt: string;
}

@Component({
  selector: 'app-instagram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram.component.html',
  styleUrl: './instagram.component.scss'
})
export class InstagramComponent implements OnInit {
  instagramPosts: InstagramPost[] = [];
  placeholderPosts: PlaceholderPost[] = [];
  showNoPostsMessage = false;

  // Instagram Business Account Configuration
  private readonly INSTAGRAM_USER_ID = 'YOUR_INSTAGRAM_USER_ID'; // Reemplazar con tu User ID
  private readonly ACCESS_TOKEN = 'YOUR_INSTAGRAM_ACCESS_TOKEN'; // Reemplazar con tu Access Token

  ngOnInit() {
    this.initializePlaceholders();
    // this.loadInstagramPosts(); // Descomentar cuando tengas la integración lista
  }

  /**
   * Inicializa los posts de placeholder usando imágenes existentes
   */
  private initializePlaceholders() {
    this.placeholderPosts = [
      { image: 'assets/img/fotoevento1.png', alt: 'Evento Gen3i 1' },
      { image: 'assets/img/fotoevento2.png', alt: 'Evento Gen3i 2' },
      { image: 'assets/img/fotoevento3.png', alt: 'Evento Gen3i 3' },
      { image: 'assets/img/fotoevento4.png', alt: 'Evento Gen3i 4' }
    ];
  }

  /**
   * Carga los posts de Instagram usando la API de Instagram Basic Display
   * Descomenta esta función cuando tengas configurado tu Instagram Business Account
   */
  /*
  private async loadInstagramPosts() {
    try {
      const response = await fetch(
        `https://graph.instagram.com/${this.INSTAGRAM_USER_ID}/media?fields=id,media_url,media_type,caption,permalink,like_count,comments_count,timestamp&access_token=${this.ACCESS_TOKEN}`
      );

      if (response.ok) {
        const data = await response.json();
        this.instagramPosts = data.data.slice(0, 4); // Mostrar solo los últimos 4 posts
      } else {
        console.error('Error loading Instagram posts:', response.statusText);
        this.showNoPostsMessage = true;
      }
    } catch (error) {
      console.error('Error connecting to Instagram API:', error);
      this.showNoPostsMessage = true;
    }
  }
  */

  /**
   * Abre un post específico de Instagram
   */
  openPost(permalink: string) {
    window.open(permalink, '_blank', 'noopener,noreferrer');
  }

  /**
   * Abre el perfil principal de Instagram
   */
  openInstagramProfile() {
    window.open('https://www.instagram.com/gen3i_oficial/', '_blank', 'noopener,noreferrer');
  }

  /**
   * Formatea números grandes (ej: 1500 -> 1.5K)
   */
  formatNumber(num: number): string {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  }

  /**
   * Método para refresh manual de posts (útil para testing)
   */
  refreshPosts() {
    // this.loadInstagramPosts();
  }
}
