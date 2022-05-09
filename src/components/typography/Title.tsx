import React from 'react';

interface TypographyProps {
    children: JSX.Element | string
}

export default function Title({ children }: TypographyProps) {
    return (
        <h1>{children}</h1>
    )
}