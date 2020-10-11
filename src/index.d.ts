import { Processor, Transformer } from 'unified'

declare function bridge(field: string, processor: Processor): Transformer

export = bridge
