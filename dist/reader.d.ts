export declare class Reader {
    private pointer;
    private arrayView;
    private view;
    private decoder;
    constructor(data: ArrayBuffer);
    private advance;
    read_uint8(): number;
    read_uint16(): number;
    read_uint32(): number;
    read_int8(): number;
    read_int16(): number;
    read_int32(): number;
    read_float(): number;
    read_string(len: number): string;
    read_bytes(len: number): Uint8Array;
}
