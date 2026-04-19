import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { Red, Green, Blue } = body;

    const colormindUrl = 'http://colormind.io/api/';
    const data = {
      model: 'default',
      input: [[Red, Green, Blue], 'N', 'N', 'N', 'N'],
    };

    const response = await fetch(colormindUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
        return NextResponse.json({ error: 'Failed to fetch colors' }, { status: response.status });
    }

    const colorData = await response.json();
    return NextResponse.json(colorData);

  } catch (error) {
    console.error('Error fetching colors:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
