"use strict";(self.webpackChunkprowayComputer=self.webpackChunkprowayComputer||[]).push([[706],{3706:(w,i,l)=>{l.r(i),l.d(i,{ContatoModule:()=>J});var s=l(6814),c=l(33),a=l(95),o=l(9468);function f(t,r){1&t&&(o.TgZ(0,"small",12),o._uU(1," O nome deve ter no m\xednimo 4 caracteres "),o.qZA())}function d(t,r){1&t&&(o.TgZ(0,"small",12),o._uU(1," O nome \xe9 obrigat\xf3rio "),o.qZA())}function u(t,r){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,f,2,0,"small",11),o.YNc(2,d,2,0,"small",11),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.formContato.controls.nome.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.nome.hasError("required"))}}function p(t,r){1&t&&(o.TgZ(0,"small",12),o._uU(1," O nome deve ter no m\xednimo 10 caracteres "),o.qZA())}function g(t,r){1&t&&(o.TgZ(0,"small",12),o._uU(1," O assunto \xe9 obrigat\xf3rio "),o.qZA())}function C(t,r){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,p,2,0,"small",11),o.YNc(2,g,2,0,"small",11),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.formContato.controls.assunto.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.assunto.hasError("required"))}}function _(t,r){1&t&&(o.TgZ(0,"small",12),o._uU(1," O telefone deve ter no m\xednimo 11 caracteres "),o.qZA())}function v(t,r){1&t&&(o.TgZ(0,"small",14),o._uU(1," O nome \xe9 obrigat\xf3rio "),o.qZA())}function h(t,r){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,_,2,0,"small",11),o.YNc(2,v,2,0,"small",13),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.formContato.controls.telefone.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.telefone.hasError("required"))}}function Z(t,r){1&t&&(o.TgZ(0,"small",12),o._uU(1," O email precisa ser v\xe1lido "),o.qZA())}function T(t,r){1&t&&(o.TgZ(0,"small",14),o._uU(1," O email \xe9 obrigat\xf3rio "),o.qZA())}function x(t,r){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,Z,2,0,"small",11),o.YNc(2,T,2,0,"small",13),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.formContato.controls.email.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.email.hasError("required"))}}function y(t,r){1&t&&(o.TgZ(0,"small",12),o._uU(1," A mensagem deve ter no m\xednimo 20 caracteres "),o.qZA())}function b(t,r){1&t&&(o.TgZ(0,"small",14),o._uU(1," A mensagem \xe9 obrigat\xf3ria "),o.qZA())}function I(t,r){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,y,2,0,"small",11),o.YNc(2,b,2,0,"small",13),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.formContato.controls.mensagem.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.mensagem.hasError("required"))}}const q=[{path:"",component:(()=>{class t{constructor(e){this.fb=e,this.formContato=this.fb.group({nome:["",[a.kI.minLength(4),a.kI.required]],assunto:["",[a.kI.minLength(10),a.kI.required]],telefone:["",[a.kI.minLength(11),a.kI.required]],email:["",[a.kI.email,a.kI.required]],mensagem:["",[a.kI.minLength(20),a.kI.required]]})}ngOnInit(){}enviarFormulario(){alert("A mensagem foi enviada"),this.formContato.reset()}static#o=this.\u0275fac=function(m){return new(m||t)(o.Y36(a.qu))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["app-contato"]],decls:20,vars:27,consts:[[1,"contact__title"],[1,"contact__container"],[1,"contact-form",3,"formGroup","ngSubmit"],["type","text","placeholder","Digite seu nome","formControlName","nome"],[4,"ngIf"],["type","assunto","placeholder","Digite o assunto","formControlName","assunto"],["type","tel","placeholder","(00) 00000-0000","formControlName","telefone"],["type","email","placeholder","Digite seu email","formControlName","email"],["placeholder","Digite sua mensagem...","maxlength","300","rows","4","formControlName","mensagem"],["type","submit",3,"disabled"],["src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14230.300361031366!2d-49.0703074!3d-26.9169772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df18c3b4a71d65%3A0xa5ec9dd8406a6a7!2sProWay!5e0!3m2!1spt-PT!2sbr!4v1697822145840!5m2!1spt-PT!2sbr","width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],["class","error-message",4,"ngIf"],[1,"error-message"],["class","error-mensage",4,"ngIf"],[1,"error-mensage"]],template:function(m,n){1&m&&(o.TgZ(0,"h2",0),o._uU(1,"Entre em contato"),o.qZA(),o.TgZ(2,"section",1)(3,"form",2),o.NdJ("ngSubmit",function(){return n.enviarFormulario()}),o._UZ(4,"input",3),o.YNc(5,u,3,2,"div",4),o._UZ(6,"input",5),o.YNc(7,C,3,2,"div",4),o._UZ(8,"input",6),o.YNc(9,h,3,2,"div",4),o._UZ(10,"input",7),o.YNc(11,x,3,2,"div",4),o._UZ(12,"textarea",8),o.YNc(13,I,3,2,"div",4),o.TgZ(14,"button",9),o._uU(15,"Enviar"),o.qZA()(),o.TgZ(16,"address"),o._UZ(17,"iframe",10),o.TgZ(18,"p"),o._uU(19,"Rua Sete de Setembro 1213 (Shopping Neumarkt - Centro), Blumenau, SC, 89010-911"),o.qZA()()()),2&m&&(o.xp6(3),o.Q6J("formGroup",n.formContato),o.xp6(1),o.ekj("valid",n.formContato.controls.nome.valid)("valid",n.formContato.controls.nome.invalid&&n.formContato.controls.nome.touched||n.formContato.controls.nome.dirty),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.nome.invalid&&n.formContato.controls.nome.touched||n.formContato.controls.nome.dirty),o.xp6(1),o.ekj("valid",n.formContato.controls.assunto.valid)("valid",n.formContato.controls.assunto.invalid&&n.formContato.controls.assunto.touched||n.formContato.controls.assunto.dirty),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.assunto.invalid&&n.formContato.controls.assunto.touched||n.formContato.controls.assunto.dirty),o.xp6(1),o.ekj("valid",n.formContato.controls.telefone.valid)("valid",n.formContato.controls.telefone.invalid&&n.formContato.controls.telefone.touched||n.formContato.controls.telefone.dirty),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.telefone.invalid&&n.formContato.controls.telefone.touched||n.formContato.controls.telefone.dirty),o.xp6(1),o.ekj("valid",n.formContato.controls.email.valid)("valid",n.formContato.controls.email.invalid&&n.formContato.controls.email.touched||n.formContato.controls.email.dirty),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.email.invalid&&n.formContato.controls.email.touched||n.formContato.controls.email.dirty),o.xp6(1),o.ekj("valid",n.formContato.controls.mensagem.valid)("valid",n.formContato.controls.mensagem.invalid&&n.formContato.controls.mensagem.touched||n.formContato.controls.mensagem.dirty),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.mensagem.invalid&&n.formContato.controls.mensagem.touched||n.formContato.controls.mensagem.dirty),o.xp6(1),o.Q6J("disabled",n.formContato.invalid))},dependencies:[s.O5,a._Y,a.Fj,a.JJ,a.JL,a.nD,a.sg,a.u],styles:[".contact__title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}.contact-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;row-gap:20px;margin-bottom:50px;min-width:300px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}.contact__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--gray)}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}"]})}return t})()}];let A=(()=>{class t{static#o=this.\u0275fac=function(m){return new(m||t)};static#t=this.\u0275mod=o.oAB({type:t});static#n=this.\u0275inj=o.cJS({imports:[c.Bz.forChild(q),c.Bz]})}return t})(),J=(()=>{class t{static#o=this.\u0275fac=function(m){return new(m||t)};static#t=this.\u0275mod=o.oAB({type:t});static#n=this.\u0275inj=o.cJS({imports:[s.ez,A,a.UX]})}return t})()}}]);