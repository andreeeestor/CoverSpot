<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <title>Cadastro</title>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/index.php"><img src="/imagens/Logo.png" alt="Logo"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/index.php" style="color: #18A0FB;">Página inicial</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/index.php#SobreNos" style="color: #18A0FB;">Sobre nós</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style="color: #18A0FB;">Comunidade</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style="color: #18A0FB;">Suporte</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <h1 class="text-center my-3">Como deseja se registrar</h1>
        <div class="d-flex flex-warp">
            <div class="mx-5 w-100">
                <img src="/imagens/Cover.jpg" class="rounded-circle my-3" alt="Cover" width="200px" height="200px">
                <div>
                    <h5 class="text-left">Cover artistico</h5>
                    <p class="descricao-Cadastro">Descubra novos talentos, agende performances ao vivo e conecte-se com locais de entretenimento em
                        todo o mundo na CoverSpot.</p>
                </div>
                <div class="text-center">
                    <a href="cadastroCover.php"><button class="btn btn-outline-primary">Registrar como cover
                            artitistico</button></a>
                </div>
            </div>
            <div class="mx-4">
                <img src="/imagens/Estabelecimento.jpg" class="rounded-circle my-3" alt="Cover" width="200px" height="200px">
                <div>
                    <h5 class="text-left">Estabelecimento</h5>
                    <p class="descricao-Cadastro">Cadastrar como estabelecimento no CoverSpot é uma maneira simples e eficaz para os proprietários
                        de locais de entretenimento se conectarem com artistas e promoverem eventos musicais ao vivo em
                        suas instalações.</p>
                </div>
                <div class="text-center">
                    <a href="cadastroEstabelecimento.php"><button class="btn btn-outline-primary">Registrar como estabelecimento</button></a>
                </div>
            </div>
        </div>
    </main>
</body>

</html>