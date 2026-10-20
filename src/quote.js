import {business, services, frequencies, materials} from './config.js';
export const initialForm = {service:'',property:'',area:'',bedrooms:'',bathrooms:'',frequency:frequencies[0],date:'',materials:materials[0],name:'',phone:'',email:'',city:'',notes:''};
export const isResidential = f => f.service==='residentiel' || (f.service==='demenagement' && ['Maison','Appartement'].includes(f.property));
export function properties(service) { return service==='residentiel' ? ['Maison','Appartement'] : service==='bureaux' ? ['Bureau','Local professionnel'] : service==='commercial' ? ['Commerce','Local professionnel'] : ['Maison','Appartement','Bureau','Commerce','Local professionnel','Salle de réception']; }
export function localToday() { const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
export function validate(f,today=localToday()) {
 const e={};
 for(const key of ['service','property','date','name','phone','city']) if(!f[key].trim()) e[key]='Veuillez remplir ce champ.';
 if(f.service&&!services.some(s=>s.id===f.service)) e.service='Veuillez choisir un service.';
 if(f.property&&!properties(f.service).includes(f.property)) e.property='Veuillez choisir un type de propriété.';
 if(f.date&&(!/^\d{4}-\d{2}-\d{2}$/.test(f.date)||f.date<today||Number.isNaN(Date.parse(f.date)))) e.date='Choisissez la date d’aujourd’hui ou une date à venir.';
 if(f.phone&&f.phone.replace(/\D/g,'').length<10) e.phone='Entrez un numéro de téléphone valide (au moins 10 chiffres).';
 if(f.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email='Entrez une adresse courriel valide.';
 if(f.area&&(!Number.isFinite(Number(f.area))||Number(f.area)<=0)) e.area='Entrez une superficie supérieure à zéro.';
 if(isResidential(f)&&f.bedrooms==='') e.bedrooms='Indiquez le nombre de chambres.';
 if(f.service&&f.bathrooms==='') e.bathrooms='Indiquez le nombre de salles de bain.';
 return e;
}
export function messageFor(f) {
 const lines=['Bonjour ! J’aimerais obtenir une soumission pour un service d’entretien ménager.','',`Service : ${services.find(s=>s.id===f.service)?.title||'À préciser'}`,`Type de propriété : ${f.property}`];
 if(f.area) lines.push(`Superficie approximative : ${f.area} pi²`);
 if(isResidential(f)) lines.push(`Nombre de chambres : ${f.bedrooms}`);
 lines.push(`Nombre de salles de bain : ${f.bathrooms}`,`Fréquence : ${f.frequency}`,`Date souhaitée : ${f.date}`,`Produits et matériel : ${f.materials}`,'',`Nom complet : ${f.name}`,`Téléphone : ${f.phone}`);
 if(f.email) lines.push(`Courriel : ${f.email}`);
 lines.push(`Ville ou secteur : ${f.city}`);
 if(f.notes.trim()) lines.push(`Précisions supplémentaires : ${f.notes.trim()}`);
 lines.push('','Le tarif et la disponibilité seront confirmés par votre équipe.'); return lines.join('\n');
}
export const whatsappUrl = text => `${business.whatsapp}?text=${encodeURIComponent(text)}`;
