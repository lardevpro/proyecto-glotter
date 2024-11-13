import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importamos FormsModule para usar ngModel

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule], // Asegúrate de agregar FormsModule para usar ngModel
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  message: string = ''; // Mensaje actual de la transcripción
  recognizing: boolean = false; // Estado de la transcripción de voz
  recognition: any; // Instancia de SpeechRecognition

  constructor() {
    // Verificamos si el navegador soporta la API de Web Speech
    if ('webkitSpeechRecognition' in window) {
      this.recognition = new (window as any).webkitSpeechRecognition();
      this.recognition.continuous = true;  // Continuar escuchando
      this.recognition.interimResults = true;  // Mostrar resultados intermedios mientras escucha

      // Iniciar la transcripción
      this.recognition.onstart = () => {
        this.recognizing = true;
      };

      // Detener la transcripción
      this.recognition.onend = () => {
        this.recognizing = false;
      };

      // Obtener los resultados de la transcripción
      this.recognition.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript; // Texto transcrito
        }
        this.message = transcript; // Actualiza el mensaje con el texto
      };
    } else {
      alert('Tu navegador no soporta la API de reconocimiento de voz.');
    }
  }

  // Comienza el reconocimiento de voz
  startListening() {
    if (!this.recognizing) {
      this.recognition.start();
    }
  }

  // Detener el reconocimiento de voz
  stopListening() {
    if (this.recognizing) {
      this.recognition.stop();
    }
  }
}
