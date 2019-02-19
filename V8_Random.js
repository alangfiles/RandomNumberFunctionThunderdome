/** 
uint32_t V8::Random() {

    // Random number generator using George Marsaglia's MWC algorithm.
    static uint32_t hi = 0;
    static uint32_t lo = 0;

    // Initialize seed using the system random(). If one of the seeds
    // should ever become zero again, or if random() returns zero, we
    // avoid getting stuck with zero bits in hi or lo by reinitializing
    // them on demand.
    if (hi == 0) hi = random();
    if (lo == 0) lo = random();

    // Mix the bits.
    hi = 36969 * (hi & 0xFFFF) + (hi >> 16);
    lo = 18273 * (lo & 0xFFFF) + (lo >> 16);
    return (hi << 16) + (lo & 0xFFFF);
}
**/

v8Random() {
    const maxInt32 = 2,147,483,648;
    let hi = 0;
    let lo = 0;
    
    if (hi == 0) hi = Math.Random() * maxInt32;
    if (lo == 0) lo = Math.Random() * maxInt32;

    hi = 36969 * (hi & 0xFFFF) + (hi >> 16);
    lo = 18273 * (lo & 0xFFFF) + (lo >> 16);
    return (hi << 16) + (lo & 0xFFFF);
}
