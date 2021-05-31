<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;

use App\Models\Event;

use Carbon\Carbon;

class EventController extends Controller
{
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "event_name" => "required|min:8",
            "description" => "required",
            "start_date" => "date",
            "end_date" => "date",
            "organizer" => "string|required"
        ]);

        if ($validator->fails()) {
            return response($validator->errors());
        }

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
        $validator = Validator::make($request->all(), [
            "event_name" => "min:8",
            "start_date" => "date",
            "end_date" => "date",
            "organizer" => "string"
        ]);

        if ($validator->fails()) {
            return response($validator->errors());
        }

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

    // Test only
    public function getAllDeleted()
    {
        return response(Event::onlyTrashed()->get());
    }
}
