javaScript

// Manejo de Interacción, Emergencias y Sistema de Votación Única por Cédula
document.addEventListener('DOMContentLoaded', () => {
    console.log("Aplicación Oficial con respaldo del Municipio de Valledupar, Gobernación del Cesar y Areandina Sede Valledupar.");
});

// Mostrar/Ocultar Banner de Emergencias
function toggleEmergencias() {
    const banner = document.getElementById('emergency-banner');
    banner.classList.toggle('hidden');
}

// Control de Votación Única por Categoría
function registrarVoto(categoria, boton) {
    const voterIdInput = document.getElementById('voter-id');
    const voterId = voterIdInput.value.trim();

    if (!voterId) {
        alert("Por favor ingrese su Cédula de Ciudadanía o Documento para validar su voto único.");
        voterIdInput.focus();
        return;
    }

    const storageKey = voto_${voterId}_${categoria};

    if (localStorage.getItem(storageKey)) {
        alert(Usted ya ha registrado su voto para la categoría: ${categoria.toUpperCase()}.);
        return;
    }

    // Registrar voto localmente para control de sesión
    localStorage.setItem(storageKey, 'true');
    boton.innerText = "Voto Registrado ✓";
    boton.classList.add("voted");
    boton.disabled = true;

    alert(¡Gracias! Voto registrado exitosamente bajo la Cédula ${voterId} para la categoría ${categoria.toUpperCase()}.);
}