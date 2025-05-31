import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { LivroService, Livro } from '../../shared/services/livros.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NavbarComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private livroService = inject(LivroService);

  livro: Livro = {
    id: '',
    titulo: '',
    autor: '',
    ano: 0,
    genero: ''
  };

  isEditando = false;
  idLivro: string | null = null;

  ngOnInit() {
    this.idLivro = this.route.snapshot.paramMap.get('id');

    if (this.idLivro) {
      this.isEditando = true;
      this.livroService.buscarPorId(this.idLivro).subscribe(res => {
        this.livro = res;
      });
    }
  }

  salvar() {
  if (this.isEditando && this.idLivro) {
    this.livroService.atualizar(this.idLivro, this.livro).subscribe({
      next: () => this.router.navigate(['/livros']),
      error: (err) => console.error('Erro ao atualizar:', err)
    });
  } else {    
    const { id, ...livroSemId } = this.livro;
    this.livroService.criar(livroSemId as Livro).subscribe({
      next: () => this.router.navigate(['/livros']),
      error: (err) => console.error('Erro ao criar:', err)
    });
  }
}

  
}
