import Test from "@/app/utilis/model/test";
import { connectToDB } from "@/app/utilis/mongodb";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        // Connect to the database
        await connectToDB();
        // Query the database to get all users
        const tests = await Test.find({}).lean(); // Use lean() to get plain JavaScript objects

        // Exclude the password field from each user object
        // const usersWithoutPassword = users.map(user => {
        //     const { password, createdAt, updatedAt,  ...userWithoutPassword } = user;
        //     return userWithoutPassword;
        // });

        // Return the users as a JSON response
        return NextResponse.json(tests);
    } catch (error) {
        console.error('Error fetching tests:', error);
        return NextResponse.json({ error: 'Failed to fetch tests' }, { status: 500 });
    }
};


export const POST = async (req) => {
  try {
    
    await connectToDB();

    const { title, description, hours, totalquestions, year } = await req.json();

    if (!title && !description && !hours && !totalquestions && !year) {
      return NextResponse.json({ error: 'All parameters are required' }, { status: 400 });
    }

      const newTest = new Test({ title, description, hours, totalquestions, year  });
      await newTest.save();
      return NextResponse.json({ message: 'Test Record saved successfully' , Test: newTest}, { status: 201 });
  
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
};
