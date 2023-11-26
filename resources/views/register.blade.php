<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register || SinauO</title>
    <link rel="stylesheet" href="{{ asset('nonUser/css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('nonUser/css/auth.css') }}">
    <link rel="shortcut icon" href="{{ asset('dashboard/images/logo/favicon.svg') }}" type="image/x-icon">
    <link rel="shortcut icon" href="{{ asset('dashboard/images/logo/favicon.png') }}" type="image/png">
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>

<body>
    <div id="auth">
        <div class="row h-100">
            <div class="col-lg-6 d-none d-lg-block">
                <img src="{{ asset('nonUser/img/login.svg') }}" alt="">
            </div>
            <div class="col-lg-5 col-12">
                <div id="auth-left">
                    <div class="logo">
                        <img src="{{ asset('nonUser/img/logo.svg') }}" alt="">
                    </div>
                    <h2 class="auth-titlle">Buat Akunnmu</h2>
                    <p class="auth-subtitlle ">Daftar dan Mulai Belajar Bersama SinauO!</p>
                    <form method="POST" action="">
                        @csrf
                        <div class="form-group position-relative has-icon-left mb-4">
                            <label for="form-control" class="form-control"> Nama</label>
                            <input type="text" class="form-control form-control-xl" placeholder="Masukkan Namamu"
                                name="nama">
                        </div>

                        <div class="form-group position-relative has-icon-left mb-4">
                            <label for="form-control" class="form-control"> Email</label>
                            <input type="text" class="form-control form-control-xl" placeholder="Email"
                                name="email">
                        </div>

                        <div class="form-group position-relative has-icon-left mb-4">
                            <label for="form-control" class="form-control">Password</label>
                            <input type="password" class="form-control form-control-xl" placeholder="Password"
                                name="password">
                        </div>

                        <button class="btn btn-primary btn-block btn-lg shadow-lg mt-5" type="submit">
                            {{ __('Register') }}</button>
                    </form>
                    <div class="text-center mt-5 text-lg fs-4">
                        <p class="text-gray-600">Sudah Punya Account? <a href="/login" class="font-bold">Masuk</a>.
                        </p>
                        @if (Route::has('password.request'))
                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                {{ __('Forgot Your Password?') }}
                            </a>
                        @endif
                    </div>
                </div>
            </div>

        </div>
    </div>

    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <script src="https://kit.fontawesome.com/f9a30c1ad2.js" crossorigin="anonymous"></script>
</body>

</html>
