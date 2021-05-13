<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Event;

use Carbon\Carbon;

class EventController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->all();
        $data["start_date"] = Carbon::parse($data["start_date"]);
        $data["end_date"] = Carbon::parse($data["end_date"]);
        $event = Event::create($data);
        if ($event) {
            return response($event);
        }
        return "Not Saved!";
    }

    public function index()
    {
        $events =Event::all();
        if($events){
            return response($events);
        }
            return "No Data!";
    }

    public function getEventById(Request $request)
    {
        $eventId = $request->id;
        $eventGetById =Event::find($eventId);
        if($eventGetById){
            return response($eventGetById);
        }
            return "Not Found!";
    }

    public function update(Request $request)
    {
        $eventId = $request->id;
        $eventGetById =Event::find($eventId);
        if ($eventGetById){
            $dataToUpdate = $request->all();
            $updatedEvent =  $eventGetById->update($dataToUpdate);
            return response($updatedEvent);
        }
            return "Not Found!";
    }

    public function destroy(Request $request)
    {
        $eventId = $request->id;
        $eventGetById =Event::find($eventId);
        if($eventGetById){
            $eventGetById->delete();
            return response ("Succesfully Deleted!");
        }
            return "Not Found!";
    }
}
