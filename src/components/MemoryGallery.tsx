import { useState } from 'react';
import { Camera, X, Calendar, Tag } from 'lucide-react';
import { Memory } from '../data/birthday';

interface MemoryGalleryProps {
    memories: Memory[];
}

export default function MemoryGallery({ memories }: MemoryGalleryProps) {
    const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="text-center mb-10 space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-purple-400 uppercase">
                    <Camera className="w-4 h-4" />
                    <span>Walk Down Memory Lane</span>
                </div>
                <h2 className="text-3xl font-extrabold text-white">Captured Moments</h2>
                <p className="text-sm text-slate-400">Click on any photo to open full memory</p>
            </div>

            {/* Polaroid Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {memories.map((mem, idx) => {
                    // थोड़ी सी रैंडम टिल्ट (rotation) ताकि असली पोलेरॉइड फील आए
                    const rotationClass =
                        idx % 3 === 0
                            ? 'hover:rotate-0 -rotate-2'
                            : idx % 3 === 1
                                ? 'hover:rotate-0 rotate-1'
                                : 'hover:rotate-0 rotate-2';

                    return (
                        <div
                            key={mem.id}
                            onClick={() => setSelectedMemory(mem)}
                            className={`bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:border-pink-500/50 hover:shadow-pink-500/10 cursor-pointer flex flex-col justify-between ${rotationClass}`}
                        >
                            {/* Image Box */}
                            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-950 mb-3 border border-slate-800">
                                <img
                                    src={mem.image}
                                    alt={mem.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    onError={(e) => {
                                        // अगर इमेज पाथ मिसिंग हो तो फॉलबैक
                                        (e.target as HTMLElement).style.display = 'none';
                                    }}
                                />
                                <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-medium bg-black/60 backdrop-blur-md text-pink-300 border border-pink-500/20">
                                    {mem.tag}
                                </span>
                            </div>

                            {/* Caption details */}
                            <div className="space-y-1">
                                <h3 className="font-bold text-white text-base truncate">{mem.title}</h3>
                                <p className="text-xs text-slate-400 line-clamp-2">{mem.description}</p>
                                <div className="pt-2 flex items-center justify-between text-[11px] text-purple-400">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {mem.date}
                                    </span>
                                    <span className="text-pink-400 font-medium">View &rarr;</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Zoom / Lightbox Modal */}
            {selectedMemory && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
                    <div className="relative max-w-lg w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl p-6">
                        <button
                            onClick={() => setSelectedMemory(null)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors z-10"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-black mb-4">
                            <img
                                src={selectedMemory.image}
                                alt={selectedMemory.title}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-500/20 text-pink-300 flex items-center gap-1">
                                    <Tag className="w-3 h-3" />
                                    {selectedMemory.tag}
                                </span>
                                <span className="text-xs text-slate-400 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {selectedMemory.date}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white">{selectedMemory.title}</h3>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                {selectedMemory.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}