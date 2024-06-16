'use client'

import { useParams } from 'next/navigation'
import QRCode from "qrcode.react";

export default async function QuizQR() {
  const slug = useParams()

  return (
    <QRCode size="256" value={`https://kq.fernando.is/quiz-view/${slug}`} />
  );
}
