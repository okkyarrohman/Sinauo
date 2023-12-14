<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Murid</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<style>
    body {
        background-color: #F0F7FF;
    }
</style>

<body>

    <div class="row h-100">
        <div class="col-lg-3">
            <div class="card">
                <div class="row justify-content-center mt-4">
                    <div class="col-lg-12">
                        <div class="logo text-center">
                            <img src="{{ asset('nonUser/img/logo.svg') }}" alt="">
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-lg-6 mt-4">
                        <h3 class="text text-center">Menu</h3>
                    </div>
                </div>
                <div class="row ms-4">
                    <div class="col-lg-6">
                        <a href="" class="text">Dashboard</a>
                    </div>
                </div>
                <div class="row ms-4">
                    <div class="col-lg-6  mt-4">
                        <a href="" class="text text-center">Materi</a>
                    </div>
                </div>
                <div class="row ms-4">
                    <div class="col-lg-6 mt-4">
                        <a href="" class="text text-center">Turtorial</a>
                    </div>
                </div>
                <div class="row ms-4">
                    <div class="col-lg-6 mt-4">
                        <a href="" class="text text-center">Referensi</a>
                    </div>
                </div>

                <br>
                <br>

                <div class="row">
                    <div class="col-lg-6 mt-4">
                        <h3 class="text text-center">Penilaian</h3>
                    </div>
                </div>
                <div class="row ms-4">
                    <div class="col-lg-6">
                        <a href="" class="text">Kuis</a>
                    </div>
                </div>
                <div class="row ms-4">
                    <div class="col-lg-6  mt-4">
                        <a href="" class="text text-center">Tugas</a>
                    </div>
                </div>
                <br><br><br>
                <div class="row ms-4">
                    <div class="col-lg-6">
                        <a href="" class="text">Paduan</a>
                    </div>
                </div>
                <div class="row ms-4">
                    <div class="col-lg-6  mt-4">
                        <a href="" class="text text-center">Logout</a>
                    </div>
                </div>

                <div class="main">
                    @yield('content')
                </div>
            </div>
        </div>
    </div>





    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous">
    </script>
</body>

</html>
