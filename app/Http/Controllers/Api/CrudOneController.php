<?php

namespace App\Http\Controllers\Api;

use Log;
use App\Models\CrudOne;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CrudOneController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $crudOne = CrudOne::orderBy('id', 'asc')->paginate(2);
        return response()->json($crudOne);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

        // Validation
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'status' => 'nullable',
        ]);

        // Insert
        $crudOne = CrudOne::create($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Data created successfully',
            'data' => $crudOne
        ], 201);

        } catch (\Throwable $th) {

            return response()->json([
                'status' => 'error',
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(CrudOne $crudOne)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CrudOne $crudOne)
    {
        try {

        // Validation
        $validated = $request->validate([
            'name'   => 'sometimes|required',
            'email'  => 'sometimes|required',
            'phone'  => 'sometimes|required',
            'status' => 'nullable'
        ]);

        // Update
        $crudOne->update($validated);

        return response()->json([
            'status'  => 'success',
            'message' => 'Data updated successfully',
            'data'    => $crudOne
        ], 200);

        } catch (\Throwable $th) {

            return response()->json([
                'status'  => 'error',
                'message' => $th->getMessage()
            ], 500);

        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CrudOne $crudOne)
    {
        try {

        // Delete
        $crudOne->delete();

        return response()->json([
            'status'  => 'success',
            'message' => 'Data deleted successfully',
            'data'    => $crudOne
        ], 200);

        } catch (\Throwable $th) {

            return response()->json([
                'status'  => 'error',
                'message' => $th->getMessage()
            ], 500);

        }
    }
}
