import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
    return (
        <div className="space-y-6">
                        <h2 className="font-semibold text-xl">Links importantes</h2>

                        <div className="space-y-5">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100"> Clara repositório </span>
                                    <a href="https://github.com/MariaClaraCoutoLorena/nlwjourney" className="block text-xs text-zinc-400 truncate hover:text-zinc-200"> https://github.com/MariaClaraCoutoLorena/nlwjourney </a>
                                </div>
                                <Link2 className="text-zinc-400 size-5 shrink-0"/>
                            </div>
                        </div>

                        <Button colors='secondary' size='full'>
                            <Plus className='size-5'/>
                            Cadastrar novo link
                        </Button>

                    </div>
    )
}