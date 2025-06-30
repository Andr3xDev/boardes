import { useRef, useEffect } from "react";
import p5 from "p5";

interface CanvasProps {
    color: string;
    strokeWeight: number;
}

export function Canvas({ color, strokeWeight }: CanvasProps) {
    const canvasRef = useRef<HTMLDivElement>(null);

    const propsRef = useRef<CanvasProps>({ color, strokeWeight });

    useEffect(() => {
        propsRef.current = { color, strokeWeight };
    }, [color, strokeWeight]);

    useEffect(() => {
        const sketch = (p: p5) => {
            p.setup = () => {
                p.createCanvas(800, 340).parent(canvasRef.current!);
                p.background(255);
            };

            p.mouseDragged = () => {
                p.stroke(propsRef.current.color);
                p.strokeWeight(propsRef.current.strokeWeight);
                p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
            };
        };

        const p5Instance = new p5(sketch);

        return () => {
            p5Instance.remove();
        };
    }, []);

    return (
        <div
            ref={canvasRef}
            className="bg-white shadow-lg border-6 border-[#1f6d79]"
        />
    );
}
