<?php

namespace App\Http\Requests\Turnos;

use Illuminate\Foundation\Http\FormRequest;

class TurnosRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'document_type' => 'required',
            'document_number' => 'required',
            'name' => 'required',
            'lastname' => 'required',
            'cellphone' => 'required',
            'email' => 'required',
            'date' => 'required',
            'time' => 'required',
            'barber_name' => 'required'
        ];
    }
}
