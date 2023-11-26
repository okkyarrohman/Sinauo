<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sinauo || Landing Pages</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<style>
    .container {
        width: 90%
    }

    .group-1 {
        width: 90%;

    }

    .content-1 {
        width: 200px;

    }

    .content-1 .font {
        font-family: 'Gilroy', ;
        font-weight: 700;
        font-size: 69px;

        margin-right: 20%;
    }

    .content-1 .par {

        margin-right: 20%;
    }

    .font span {
        color: blue;
    }

    .fitur-section {
        width: 90%;
        height: 356px;
    }

    .keterangan {
        width: 60%;



    }

    .keterangan h2 {
        text-align: end;
        font-family: 'Gilroy', ;
        font-weight: 700;
        font-size: 45px;
        padding-right: 50px;
        padding-top: 50px;
    }

    .keterangan p {
        text-align: justify;
        font-family: 'Gilroy', ;
        padding: 50px;
        color: white;
    }

    .keterangan span {
        color: white;
    }

    .card .par {
        font-weight: 700;
        font-size: 24px;
        color: white;
    }
</style>

<body>
    <nav class="navbar bg-body-tertiary shadow-sm " style="width: 90%;">
        <div class="container-sm">
            <a class="navbar-brand" href="#">
                <img src="{{ asset('nonUser/img/logo.svg') }}" alt="Logo" width="100" height="50"
                    class="d-inline-block align-text-top">
            </a>
            <div class="menu d-flex justify-content-end mr-4">
                <div class="beranda m-4">
                    <h6>Beranda</h6>
                </div>
                <div class="fitur m-4">
                    <h6>Fitur</h6>
                </div>
                <div class="tentang m-4">
                    <h6>Tentang</h6>
                </div>
                <div class="auth m-4">
                    <a href="" class="btn btn-primary">
                        <h6>Masuk</h6>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <div class="beranda-section">
        <div class="group-1 d-flex justify-content-between">
            <div class="content-1 ps-5 p-5 px-5 w-75">
                <h2 class="font">Platform <span>Belajar</span> <br>Masa Kini</h2>
                <p class="par">SinauO! adalah inovasi pembelajaran berplatform website yang siap memberikan konten
                    pembelajaran
                    desain website dan memimpin pendidikan. ?</p>
                <a href="" class="btn btn-primary">Belajar Sekarang</a>
            </div>
            <div class="content-2">
                <div class="img ms-5">
                    <img src="{{ asset('nonUser/img/gambar1.svg') }}" alt="" width="400px" height="400px">
                </div>
            </div>
        </div>
    </div>

    <div class="fitur-section bg-primary">
        <div class="fitur d-flex justify-content-between">
            <div class="gourp-1">
                <div class="row mt-5 pt-4">
                    <div class="col-md-12">
                        <div class="card m-4 shadow-lg" style="background-color:#6ED7F5;">
                            <div class="content d-flex justify-content-center align-items-center">
                                <img src="{{ asset('nonUser/img/logo.svg') }}" width="70px" height="70px"alt="">
                            </div>
                            <br>
                            <p class="par d-flex justify-content-center">Contoh Proyek</p>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="card m-4 shadow-lg" style="background-color: #FFA43A;">
                            <div class="content d-flex justify-content-center align-items-center">
                                <img src="{{ asset('nonUser/img/logo.svg') }}" width="70px" height="70px"alt="">
                            </div>
                            <br>
                            <p class="par d-flex justify-content-center">Quiz & Tugas</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="group-2">
                <div class="row mt-5 pt-4">
                    <div class="col-md-12">
                        <div class="card m-4 shadow-lg" style="background-color:#AB99FB;">
                            <div class="content d-flex justify-content-center align-items-center">
                                <img src="{{ asset('nonUser/img/logo.svg') }}" width="70px" height="70px"alt="">
                            </div>
                            <br>
                            <p class="par d-flex justify-content-center">Konten Belajar</p>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="card m-4 shadow-lg" style="background-color:#3949AB; ">
                            <div class="content d-flex justify-content-center align-items-center">
                                <img src="{{ asset('nonUser/img/logo.svg') }}" width="70px" height="70px"alt="">
                            </div>
                            <br>
                            <p class="par d-flex justify-content-center">Hasil Belajar</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="keterangan">
                <h2>Fitur <span>Populer</span></h2>
                <p>SinauO! merupakan platform pembelajaran terbaik ,dengan menghadirkan pengalaman belajar yang baik
                    bagi Anda, SinauO! juga menyediakan banyak konten belajar yang terstruktur untuk mendukung desain
                    website anda.</p>
            </div>
        </div>
    </div>








    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous">
    </script>
</body>

</html>
