
export class Reader {
    private pointer: number;
    private arrayView: Uint8Array;
    private view: DataView;
    private decoder: TextDecoder;
    failed: boolean;

    constructor(data: ArrayBuffer, offset = 0) {
        this.pointer = 0;
        this.arrayView = new Uint8Array(data, offset);
        this.view = new DataView(data, offset);
        this.decoder = new TextDecoder;
        this.failed = false;
    }

    read_uint8(): number {
        this.pointer += 1;
        if (this.failed || this.pointer > this.view.byteLength) {
            this.failed = true;
            return 0;
        }
        return this.view.getUint8(this.pointer - 1);
    }

    read_uint16(): number {
        this.pointer += 2;
        if (this.failed || this.pointer > this.view.byteLength) {
            this.failed = true;
            return 0;
        }
        return this.view.getUint16(this.pointer - 2, true);
    }

    read_uint32(): number {
        this.pointer += 4;
        if (this.failed || this.pointer > this.view.byteLength) {
            this.failed = true;
            return 0;
        }
        return this.view.getUint32(this.pointer - 4, true);
    }

    read_int8(): number {
        this.pointer += 1;
        if (this.failed || this.pointer > this.view.byteLength) {
            this.failed = true;
            return 0;
        }
        return this.view.getInt8(this.pointer - 1);
    }

    read_int16(): number {
        this.pointer += 2;
        if (this.failed || this.pointer > this.view.byteLength) {
            this.failed = true;
            return 0;
        }
        return this.view.getInt16(this.pointer - 2, true);
    }

    read_int32(): number {
        this.pointer += 4;
        if (this.failed || this.pointer > this.view.byteLength) {
            this.failed = true;
            return 0;
        }
        return this.view.getInt32(this.pointer - 4, true);
    }

    read_float(): number {
        this.pointer += 4;
        if (this.failed || this.pointer > this.view.byteLength) {
            this.failed = true;
            return 0;
        }
        return this.view.getFloat32(this.pointer - 4, true);
    }

    read_string(len: number): string {
        this.pointer += len;
        if (this.failed || this.pointer > this.view.byteLength) {
            this.failed = true;
            return "";
        }
        const pos = this.pointer - len;
        return this.decoder.decode(this.arrayView.slice(pos, pos + len));
    }

    read_bytes(len: number): Uint8Array {
        this.pointer += len;
        if (this.failed || this.pointer > this.view.byteLength) {
            this.failed = true;
            return new Uint8Array;
        }
        const pos = this.pointer - len;
        return this.arrayView.slice(pos, pos + len);
    }
}