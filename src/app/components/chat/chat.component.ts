import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  messages: Array<{ text: string, isSystem: boolean }> = [];
  userInput: string = '';
  systemMessage: string = '¡Hola! ¿En qué puedo ayudarte hoy?';
  isListening: boolean = false; // Control para verificar si está escuchando

  constructor() {
    this.addSystemMessage(this.systemMessage);
  }

  // Añadir un mensaje del sistema
  addSystemMessage(text: string) {
    this.messages.push({ text, isSystem: true });
  }

  // Añadir un mensaje del usuario
  addUserMessage(text: string) {
    this.messages.push({ text, isSystem: false });
  }

  // Iniciar el reconocimiento de voz
  startSpeechRecognition() {
    // Verificar si el navegador es compatible
    const recognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!recognition) {
      this.addSystemMessage('Lo siento, tu navegador no soporta el reconocimiento de voz.');
      return;
    }

    // Si ya está escuchando, no hacer nada
    if (this.isListening) {
      return;
    }

    this.isListening = true; // Indicamos que está escuchando

    // Instanciar el objeto de reconocimiento de voz
    const recognitionInstance = new recognition();
    recognitionInstance.lang = 'es-ES';  // Establecer el idioma a español
    recognitionInstance.continuous = false; // No continuará escuchando automáticamente, lo hace después de una frase
    recognitionInstance.interimResults = false; // No mostrar resultados intermedios

    // Evento cuando el reconocimiento empieza
    recognitionInstance.onstart = () => {
      this.addSystemMessage('Escuchando...');
    };

    // Evento cuando se recibe el resultado de la transcripción
    recognitionInstance.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      this.userInput = transcript;
      this.addUserMessage(transcript);
      this.speakText(` ${transcript}`);
      recognitionInstance.stop();  // Detener el reconocimiento al recibir el resultado
      this.isListening = false;    // Resetear el estado de "escuchando"
    };

    // Evento de error durante el reconocimiento
    recognitionInstance.onerror = (event: any) => {
      this.addSystemMessage('Ocurrió un error al intentar escucharte, por favor intenta de nuevo.');
      recognitionInstance.stop();
      this.isListening = false;
    };

    // Evento cuando el reconocimiento termina
    recognitionInstance.onend = () => {
      this.addSystemMessage('Deja de hablar para finalizar.');
      this.isListening = false; // Resetear el estado de "escuchando"
    };

    // Iniciar el reconocimiento de voz
    recognitionInstance.start();
  }

  // Función para que el sistema lea en voz alta el texto
  speakText(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';  // Establecer el idioma a español
    window.speechSynthesis.speak(utterance);
  }
}
