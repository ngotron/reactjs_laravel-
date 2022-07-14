<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    use HasFactory;
    protected $table = 'foods';
    protected $fillable = ['name', 'decription', 'price', 'image', 'cate_id'];
    public function categogy()
    {
        return $this->belongsTo(Category::class, 'cate_id', 'id');
    }
}
