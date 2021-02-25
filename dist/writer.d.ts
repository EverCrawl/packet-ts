export declare class Writer {
    private pointer;
    private arrayView;
    private view;
    /**
     * Default constructor
     */
    constructor();
    /**
     * Construct with capacity
     * @param capacity
     */
    constructor(capacity: number);
    /**
     * Construct from an existing buffer
     * @param buffer
     */
    constructor(buffer: ArrayBuffer, offset?: number);
    private ensure;
    private advance;
    write_uint8(value: number): void;
    write_uint16(value: number): void;
    write_uint32(value: number): void;
    write_int8(value: number): void;
    write_int16(value: number): void;
    write_int32(value: number): void;
    write_float(value: number): void;
    write_string(value: string): void;
    write_bytes(value: Uint8Array): void;
    finish(): ArrayBuffer;
}
