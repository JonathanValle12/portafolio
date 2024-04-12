import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/traductor.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public translationService: TranslationService
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
      try {
        Swal.fire({
          title: '¡Mensaje enviado!',
          text: 'Tu mensaje ha sido enviado con exito.',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        });
        await emailjs.sendForm('service_em8tgrd', 'template_hhp2kks', '#contactForm', 'lKK99BxN9KkK-KQ5F');

        this.contactForm.reset();
      } catch (error) {
        Swal.fire({
          title: '¡Error!',
          text: 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
          icon: 'error',
          showConfirmButton: false,
          timer: 1000
        })
      }
    }
  }
}

