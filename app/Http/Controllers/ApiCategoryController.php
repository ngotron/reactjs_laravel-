<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class ApiCategoryController extends Controller
{
    //
    public function statistics()
    {
        $categories = Category::get();
        $result = [];

        foreach ($categories as $category) {
            array_push($result, [
                "id" => $category->id, "name" => $category->name,
                "count" => count($category->foods)
            ]);
        }
        return $result;
    }
}
