<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BoardController extends Controller
{
    public function index()
    {
        return view("");
    }

    public function create()
    {
        return view("");
    }

    public function store()
    {
        return view("");
    }

    public function getBoardData(Request $request)
    {
        $user = $request->user();
        $board = $user->board;

        if (!$board) {
            return response()->json(['error' => 'Aucun tableau associé à cet utilisateur'], 404);
        }

        $boardData = $board->load('columns.items.tags');

        return response()->json($boardData);
    }

}
