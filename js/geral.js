
/** Sobrescreve a função do alert */
function alert (prMensagem, prTitulo, prTipo)
{

    if (prTitulo === undefined)
    {
        prTitulo = '';
    }

    if (prMensagem === undefined)
    {
        prMensagem = '';
    }

    if (prTipo === undefined)
    {
        prTipo = 'warning';
    }

    swal
    ({
        title: prTitulo,
        text: prMensagem,
        type: prTipo
    });

}

/** Sobrescreve a função do confirm */
function confirm (prMensagem, prTitulo, prTipo, prFunction)
{

    /** Se vier com titulo undefinida, define como nula */
    if (prFunction === undefined)
    {
        prFunction = function () {};
    }

    swal
    ({
        title: prTitulo,
        text: prMensagem,
        type: prTipo,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar!'
    }).then(function () {},
        prFunction);
}