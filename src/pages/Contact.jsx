export default function Contact() {
return (
<div className="px-6 py-10">
<h2 className="text-3xl font-bold text-forest mb-6">Contact</h2>
<form className="max-w-xl mx-auto bg-white p-6 shadow rounded-lg">
<input type="text" placeholder="Nom" className="w-full border p-3 mb-4" />
<input type="email" placeholder="Email" className="w-full border p-3 mb-4" />
<textarea placeholder="Message" className="w-full border p-3 mb-4"></textarea>
<button className="bg-forest text-white px-6 py-3 rounded">Envoyer</button>
</form>
</div>
);
}