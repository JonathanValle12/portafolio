import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/traductor.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {

  contactForm!: FormGroup;
  backendUrl: string = environment.backendUrl

  constructor(
    private formBuilder: FormBuilder,
    public translationService: TranslationService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.createContactForm();
  }

  createContactForm(): void {
    this.contactForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]],
      message: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(300)]]
    });
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }

  async submitForm() {
    if (this.contactForm.valid) {
      const formData = {
        templateParams: this.contactForm.value // Asegúrate de que esto corresponda a lo que tu plantilla necesita
      };
      // Muestra un Swal de carga
      Swal.fire({
        title: 'Enviando...',
        text: 'Por favor espera mientras se envía el mensaje.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });
      this.http.post(`${this.backendUrl}/send-email`, formData).subscribe({
        next: (response) => {
          Swal.close();
          Swal.fire({
            title: '¡Mensaje enviado!',
            text: 'Tu mensaje ha sido enviado con exito.',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          });
        },
        error: (response) => {
          Swal.close();
          Swal.fire({
            title: '¡Error!',
            text: 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
            icon: 'error',
            showConfirmButton: false,
            timer: 1000
          })
        }
      })
      this.contactForm.reset();
    }
  }
}