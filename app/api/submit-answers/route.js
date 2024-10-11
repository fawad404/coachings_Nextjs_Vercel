// app/api/submit-answers/route.js

export async function POST(request) {
    try {
      const { answers } = await request.json();
  
      // Check if answers is an array
      if (!Array.isArray(answers)) {
        return new Response(JSON.stringify({ error: 'Answers must be an array' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      let correctCount = 0;
      let incorrectCount = 0;
  
      // Process each answer
      answers.forEach(answer => {
        const { id, selectedOptionValue, key } = answer;
  
        // Assuming 'key' contains the correct value for that question
        if (selectedOptionValue === key) {
          correctCount++;
        } else {
          incorrectCount++;
        }
      });
  
      // Return the counts
      return new Response(
        JSON.stringify({ correctCount, incorrectCount }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({ error: 'Failed to process request' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  }
  