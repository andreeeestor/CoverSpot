<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <title>Login</title>
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
        <div class="my-5">
            <h2 class="text-center">Login na <img src="/imagens/Logo.png" alt="Cover Spot "></h2>
            <h5 class="text-center">Bem-vindo de volta à CoverSpot!</h5>
        </div>
        <form class="container text-center" action="/crud/MetodoLogin.php" method="post">
            <div class="row mb-3">
                <div class="col">
                    <input type="text" class="form-control" id="username" name="username" placeholder="E-mail ou nome de usuário">
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <input type="password" class="form-control" id="password" name="password" placeholder="Senha">
                </div>
            </div>
            <button type="submit" class="btn btn-primary mb-3">Entrar</button>
        </form>
    </main>
</body>

</html>