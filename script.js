// ... código anterior ...

// Funções do Banner PIX
function showPixModal() {
    document.getElementById('pixModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePixModal() {
    document.getElementById('pixModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function closeSupportBanner() {
    const banner = document.getElementById('supportBanner');
    banner.style.display = 'none';
    banner.style.animation = 'none';
}

function copyPixKey() {
    const pixKey = '123.456.789-00';
    navigator.clipboard.writeText(pixKey).then(() => {
        const btn = document.querySelector('.key-copy');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
        btn.style.background = '#28a745';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
        }, 2000);
    });
}

// Botões de valor PIX
document.addEventListener('DOMContentLoaded', function() {
    // ... código anterior ...
    
    // Eventos dos botões de valor
    document.querySelectorAll('.value-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.value-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Fechar modal clicando fora
    document.getElementById('pixModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closePixModal();
        }
    });
});