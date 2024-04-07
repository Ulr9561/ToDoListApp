<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
    }

    public function show(User $user)
    {
        return view("", compact("user"));
    }
}
