<?php

use Illuminate\Database\Seeder;

class Widget extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Widget::class,5)->create();
    }
}
