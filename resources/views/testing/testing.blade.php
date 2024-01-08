<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>

    <form method="POST" action="{{ route('store.testingQuis') }}">
        @csrf
        @foreach ($categories as $category)
            <div class="card mb-3">
                <div class="card-header">{{ $category->kuis }}</div>

                <div class="card-body">
                    @foreach ($category->soal as $question)
                        <div class="card @if (!$loop->last) mb-3 @endif">
                            <div class="card-header">{{ $question->soal }}</div>

                            <div class="card-body">
                                <input type="hidden" name="soal[{{ $question->id }}]" value="">
                                @foreach ($question->opsi as $option)
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="soal[{{ $question->id }}]"
                                            id="option-{{ $option->id }}"
                                            value="{{ $option->id }}"@if (old("soal.$question->id") == $option->id) checked @endif>
                                        <label class="form-check-label" for="option-{{ $option->id }}">
                                            {{ $option->opsi }}
                                        </label>
                                    </div>
                                @endforeach

                                @if ($errors->has("questions.$question->id"))
                                    <span style="margin-top: .25rem; font-size: 80%; color: #e3342f;" role="alert">
                                        <strong>{{ $errors->first("questions.$question->id") }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        @endforeach

        <div class="form-group row mb-0">
            <div class="col-md-6">
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </div>
        </div>
    </form>

</body>

</html>
