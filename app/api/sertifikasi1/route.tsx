import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const readDirectory = (directory: string) => {
    const dir = path.resolve('./public',directory);
    const files = fs.readdirSync(dir);

    return files.map((file) => ({
        img: `/${directory}/${file}`,
    }));
};

export async function GET(req: NextRequest) {
    const sertifikasi1 = readDirectory('sertifikasi1');

    return NextResponse.json(sertifikasi1);
}