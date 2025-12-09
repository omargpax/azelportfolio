// Description: Árboles decorativos: refactorizado para mejor calidad y clases válidas
import Image from "next/image";

const TREE_SRC = "/assets/christmas_tree.psd.png";

function TreeCluster({ className = "", sizes = [50, 70, 50], offsets = [] }) {
    return (
        <div className={`pointer-events-none absolute bottom-0 flex items-end gap-2 ${className}`}>
            {sizes.map((w, i) => (
                <Image
                    key={i}
                    src={TREE_SRC}
                    alt="Árbol decorativo"
                    width={w}
                    height={w}
                    className={offsets[i] || ""}
                />
            ))}
        </div>
    );
}

const ChristmasTree = () => {
    return (
        <div className="absolute w-full bottom-0 left-0 flex items-end justify-between px-4 md:px-8 lg:px-16 top-10">
            {/* left cluster */}
            <TreeCluster className="left-4 -z-10" sizes={[50, 70, 50]} offsets={["relative -right-3", "", "relative -left-3"]} />

            {/* center cluster (centered horizontally) */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 -z-10">
                <Image src={TREE_SRC} alt="Árbol decorativo" width={64} height={64} />
            </div>

            {/* right cluster */}
            <TreeCluster className="right-4 -z-10" sizes={[50, 70, 50]} offsets={["relative -right-2", "", "relative -left-2"]} />
        </div>
    );
};

export default ChristmasTree;