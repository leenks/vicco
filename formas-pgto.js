            // JavaScript para exibir/ocultar campos com base na forma de pagamento selecionada
            document.addEventListener('DOMContentLoaded', function () {
                const boletoFields = document.getElementById('boletoFields');
                const transferenciaFields = document.getElementById('transferenciaFields');
                const pixFields = document.getElementById('pixFields');

                function hideAllPaymentFields() {
                    boletoFields.classList.add('hidden');
                    transferenciaFields.classList.add('hidden');
                    pixFields.classList.add('hidden');
                }

                document.querySelectorAll('input[name="pagamento"]').forEach(function (input) {
                    input.addEventListener('change', function () {
                        hideAllPaymentFields();
                        switch (this.value) {
                            case 'boleto':
                                boletoFields.classList.remove('hidden');
                                break;
                            case 'transferencia':
                                transferenciaFields.classList.remove('hidden');
                                break;
                            case 'pix':
                                pixFields.classList.remove('hidden');
                                break;
                        }
                    });
                });
            });
            
            anexarBoletoButton.addEventListener('click', function () {
            uploadFileInput.click(); // Abre a janela de seleção de arquivos
        });
