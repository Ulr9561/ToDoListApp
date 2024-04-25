<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Board;
use App\Models\Column;
use App\Models\Item;
use App\Models\Tag;
use App\Enums\PriorityEnum;
use Illuminate\Support\Facades\DB;

use function Symfony\Component\String\b;

class CodeController extends Controller
{
    public function executerCode()
    {

        // First Board
        $board = new Board();
        $board->name = 'Board Name';
        $board->user_id = 1;
        $board->save();

        $backlogColumn = new Column();
        $backlogColumn->name = 'Backlog';
        $backlogColumn->board_id = $board->id; // Assurez-vous de lier la colonne au bon tableau
        $backlogColumn->save();

        // Backlog items
        $backlogItem1 = new Item();
        $backlogItem1->title = 'Admin Panel Front-end';
        $backlogItem1->description = 'Lorem ipsum dolor sit amet ..';
        $backlogItem1->priority = PriorityEnum::Medium;
        $backlogItem1->column_id = $backlogColumn->id;
        $backlogItem1->deadline = 8;
        $backlogItem1->image = 'images/task1.jpg';
        $backlogItem1->alt = "task image";
        $backlogItem1->save();

        $backlogItem2 = new Item();
        $backlogItem2->title = 'Admin Panel Front-end';
        $backlogItem2->description = 'Lorem ipsum dolor sit amet ..';
        $backlogItem2->priority = PriorityEnum::Low;
        $backlogItem2->column_id = $backlogColumn->id;
        $backlogItem2->deadline = 50;
        $backlogItem2->save();

        $backlogItem1tag1 = new Tag();
        $backlogItem1tag1->title = 'Test';
        $backlogItem1tag1->color = '#FFFFFF';
        $backlogItem1tag1->save();
        $backlogItem1->tags()->attach($backlogItem1tag1);

        $backlogItem1tag2 = new Tag();
        $backlogItem1tag2->title = 'Front';
        $backlogItem1tag2->color = '#000000';
        $backlogItem1tag2->save();
        $backlogItem1->tags()->attach($backlogItem1tag2);

        // Pending Column
        $pendingColumn = new Column();
        $pendingColumn->name = 'Pending';
        $pendingColumn->board_id = $board->id; // Assurez-vous de lier la colonne au bon tableau
        $pendingColumn->save();

        $pendingItem1 = new Item();
        $pendingItem1->title = 'Admin Panel Front-end';
        $pendingItem1->description = 'Lorem ipsum dolor sit amet ..';
        $pendingItem1->priority = PriorityEnum::High;
        $pendingItem1->column_id = $pendingColumn->id;
        $pendingItem1->deadline = 50;
        $pendingItem1->save();

        $pendingItem2 = new Item();
        $pendingItem2->title = 'Admin Panel Front-end';
        $pendingItem2->description = 'Lorem ipsum dolor sit amet ..';
        $pendingItem2->priority = PriorityEnum::Low;
        $pendingItem2->column_id = $pendingColumn->id;
        $pendingItem2->image = 'images/task2.jpg';
        $pendingItem2->alt = 'task image';
        $pendingItem2->deadline = 50;
        $pendingItem2->save();

        $pendingItem1tag1 = new Tag();
        $pendingItem1tag1->title = 'Test';
        $pendingItem1tag1->color = '#FFFFFF';
        $pendingItem1tag1->save();
        $pendingItem1->tags()->attach($pendingItem1tag1);

        $pendingItem1tag2 = new Tag();
        $pendingItem1tag2->title = 'Front';
        $pendingItem1tag2->color = '#000000';
        $pendingItem1tag2->save();
        $pendingItem1->tags()->attach($pendingItem1tag2);


        // To Do Column
        $todoColumn = new Column();
        $todoColumn->name = 'To Do';
        $todoColumn->board_id = $board->id; // Assurez-vous de lier la colonne au bon tableau
        $todoColumn->save();

        $todoItem1 = new Item();
        $todoItem1->title = 'Admin Panel Front-end';
        $todoItem1->description = 'Lorem ipsum dolor sit amet ..';
        $todoItem1->priority = PriorityEnum::Medium;
        $todoItem1->column_id = $pendingColumn->id;
        $todoItem1->deadline = 50;
        $todoItem1->save();

        $todoItem2 = new Item();
        $todoItem2->title = 'Admin Panel Front-end';
        $todoItem2->description = 'Lorem ipsum dolor sit amet ..';
        $todoItem2->priority = PriorityEnum::Low;
        $todoItem2->column_id = $pendingColumn->id;
        $todoItem2->image = 'images/task2.jpg';
        $todoItem2->alt = 'task image';
        $todoItem2->deadline = 50;
        $todoItem2->save();

        $todoItem1tag1 = new Tag();
        $todoItem1tag1->title = 'Test';
        $todoItem1tag1->color = '#FFFFFF';
        $todoItem1tag1->save();
        $todoItem1->tags()->attach($todoItem1tag1);

        $todoItem1tag2 = new Tag();
        $todoItem1tag2->title = 'Front';
        $todoItem1tag2->color = '#000000';
        $todoItem1tag2->save();
        $todoItem1->tags()->attach($todoItem1tag2);


        // Doing column 
        $doingColumn = new Column();
        $doingColumn->name = 'Doing';
        $doingColumn->board_id = $board->id; // Assurez-vous de lier la colonne au bon tableau
        $doingColumn->save();

        $doingItem1 = new Item();
        $doingItem1->title = 'Admin Panel Front-end';
        $doingItem1->description = 'Lorem ipsum dolor sit amet ..';
        $doingItem1->priority = PriorityEnum::Low;
        $doingItem1->column_id = $pendingColumn->id;
        $doingItem1->deadline = 50;
        $doingItem1->save();

        $doingItem2 = new Item();
        $doingItem2->title = 'Admin Panel Front-end';
        $doingItem2->description = 'Lorem ipsum dolor sit amet ..';
        $doingItem2->priority = PriorityEnum::Medium;
        $doingItem2->column_id = $pendingColumn->id;
        $doingItem2->image = 'images/task2.jpg';
        $doingItem2->alt = 'task image';
        $doingItem2->deadline = 50;
        $doingItem2->save();

        $doingItem1tag1 = new Tag();
        $doingItem1tag1->title = 'Test';
        $doingItem1tag1->color = '#FFFFFF';
        $doingItem1tag1->save();
        $doingItem1->tags()->attach($doingItem1tag1);

        $doingItem1tag2 = new Tag();
        $doingItem1tag2->title = 'Front';
        $doingItem1tag2->color = '#000000';
        $doingItem1tag2->save();
        $doingItem1->tags()->attach($doingItem1tag2);

        // Done Column 
        $doneColumn = new Column();
        $doneColumn->name = 'Done';
        $doneColumn->board_id = $board->id; // Assurez-vous de lier la colonne au bon tableau
        $doneColumn->save();

        $doneItem1 = new Item();
        $doneItem1->title = 'Admin Panel Front-end';
        $doneItem1->description = 'Lorem ipsum dolor sit amet ..';
        $doneItem1->priority = PriorityEnum::Medium;
        $doneItem1->column_id = $pendingColumn->id;
        $doneItem1->deadline = 50;
        $doneItem1->save();

        $doneItem2 = new Item();
        $doneItem2->title = 'Admin Panel Front-end';
        $doneItem2->description = 'Lorem ipsum dolor sit amet ..';
        $doneItem2->priority = PriorityEnum::Low;
        $doneItem2->column_id = $pendingColumn->id;
        $doneItem2->image = 'images/task2.jpg';
        $doneItem2->alt = 'task image';
        $doneItem2->deadline = 50;
        $doneItem2->save();

        $doneItem1tag1 = new Tag();
        $doneItem1tag1->title = 'Test';
        $doneItem1tag1->color = '#FFFFFF';
        $doneItem1tag1->save();
        $doneItem1->tags()->attach($doneItem1tag1);

        $doneItem1tag2 = new Tag();
        $doneItem1tag2->title = 'Front';
        $doneItem1tag2->color = '#000000';
        $doneItem1tag2->save();
        $doneItem1->tags()->attach($doneItem1tag2);

        // Enregistrez toutes les modifications
        DB::commit();

    }
}
