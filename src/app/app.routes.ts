import { Routes } from '@angular/router';
import { Navegacao } from './layouts/navegacao/navegacao';
import { Home } from './pages/home/home';
import { Turmas } from './pages/turmas/turmas';
import { Alunos } from './pages/alunos/alunos';
import { Usuarios } from './pages/usuarios/usuarios';
import { CadastrarTurma } from './pages/cadastrar-turma/cadastrar-turma';
import { EditarTurma } from './pages/editar-turma/editar-turma';
import { CadastrarAluno } from './pages/cadastrar-aluno/cadastrar-aluno';
import { EditarAluno } from './pages/editar-aluno/editar-aluno';
import { DadosAluno } from './pages/dados-aluno/dados-aluno';
import { EditarUsuario } from './pages/editar-usuario/editar-usuario';
import { Login } from './pages/login/login';

export const routes: Routes = [

    {
        path: "login",
        component: Login
    },

    {
        path: "",
        component: Navegacao,
        children:[
            {
                path: "home",
                component: Home
            },
            {
                path: "turmas",
                component: Turmas
            },
            {
                path: "cadastrar-turma",
                component: CadastrarTurma
            },
            {
                path: "editar-turma",
                component: EditarTurma
            },
            {
                path: "alunos",
                component: Alunos
            },
            {
                path: "cadastrar-aluno",
                component: CadastrarAluno
            },
            {
                path: "editar-aluno",
                component: EditarAluno
            },
            {
                path: "dados-aluno",
                component: DadosAluno
            },
            
            {
                path: "usuarios",
                component: Usuarios
            },
            {
                path: "editar-usuario",
                component: EditarUsuario
            }
        ]

    }
];
