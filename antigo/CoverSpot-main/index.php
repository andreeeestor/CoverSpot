<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/main.css">
    <title>Página inicial</title>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.php"><img src="imagens/Logo.png" alt="Logo"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="index.php" style="color: #18A0FB;">Página inicial</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#SobreNos" style="color: #18A0FB;">Sobre nós</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style="color: #18A0FB;">Comunidade</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style="color: #18A0FB;">Suporte</a>
                        </li>
                    </ul>
                    <div class="d-flex ms-auto">
                        <a href="php/login.php" class="me-3"><button
                                class="btn btn-outline-primary">Entrar</button></a>
                        <a href="php/cadastro.php"><button class=" btn btn-outline-primary">Registrar</button></a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <section class="p-3 py-6" id="fundo-preto">
            <div class="d-flex justify-content-center gap-4">
                <img src="imagens/img04.png" class="img-fluid my-2" width="75%">
            </div>
        </section>
        <section id="SobreNos">
            <h1 class="text-center my-3">Sobre nós</h1>
            <div class="container text-">
                <div class="row">
                    <div class="col m-3">
                        <h6>Quem somos</h6>
                        <p>
                            Na CoverSpot, somos apaixonados por conectar artistas talentosos com locais de
                            entretenimento
                            vibrantes. Nosso objetivo é criar uma plataforma inovadora que facilite a descoberta e a
                            reserva de performances musicais ao vivo em bares, pubs e outros espaços de entretenimento.
                            <br> <br>
                            Nossa equipe é composta por uma mistura diversificada de profissionais criativos,
                            desenvolvedores de software e entusiastas da música, todos unidos pela mesma visão de
                            promover e apoiar a comunidade artística.
                            <br> <br>
                            Estamos comprometidos em fornecer uma experiência excepcional tanto para artistas quanto
                            para
                            proprietários de locais. Acreditamos que a música ao vivo é uma parte fundamental da cultura
                        </p>
                        <button class="btn btn-outline-primary">Ler mais</button>
                    </div>
                    <div class="col m-3">
                        <h6>Nossa Missão</h6>
                        <ul>
                            <li>Conectar artistas talentosos com locais de entretenimento vibrantes.</li>
                            <li>Promover a música ao vivo como parte fundamental da cultura.</li>
                        </ul>
                        <button class="btn btn-outline-primary">Ler mais</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col m-3">
                        <h6>Nossa Visão</h6>
                        <ul>
                            <li>Criar uma plataforma global que simplifique a descoberta e a reserva de performances
                                musicais ao vivo.</li>
                            <li>Tornar a música ao vivo acessível e emocionante para todos.</li>
                        </ul>
                        <button class="btn btn-outline-primary">Ler mais</button>
                    </div>
                    <div class="col m-3">
                        <h6>Nossos Valores</h6>
                        <ul>
                            <li>Dedicação à comunidade artística.</li>
                            <li>Excelência em experiência do usuário.</li>
                            <li>Inovação e criatividade em tudo o que fazemos.</li>
                        </ul>
                        <button class="btn btn-outline-primary">Ler mais</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="my-4">
            <h1 class="text-center my-3">Nossa Equipe</h1>
            <div class="mx-auto" style="width: fit-content;">
                <ul>
                    <li>Uma mistura diversificada de profissionais criativos, desenvolvedores de software e entusiastas
                        da música.</li>
                    <li>Comprometidos em fornecer uma experiência excepcional tanto para artistas quanto para
                        proprietários de locais.</li>
                </ul>
            </div>
        </section>
        <section class="bg-body-tertiary p-3">
            <div class="my-5">
                <p class="text-center">"Do palco para o coração: experiências musicais que ficam para sempre."</p>
            </div>
        </section>
    </main>
</body>

</html>