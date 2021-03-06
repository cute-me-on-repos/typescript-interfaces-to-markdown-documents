declare namespace my {
  interface ICommonParams<P> {
    /**
     * Callback function khi việc gọi network thành công.
     */
    success?: (
    /**
     * Callback success function payload
     * @param {Object} payload
     */
      payload: P,
    ) => void | Promise<void>;
    /**
     * Callback function khi việc gọi network thất bại.
     */
    fail?: (
    /**
     * Callback fail function details
     * @param {Object} errorDetails
     */
      errorDetails: {
        /**
         * Error name
         */
        error: string;
        /**
         * Error message
         */
        errorMessage: string;
      },
    ) => void | Promise<void>;
    /**
     * Callback function khi việc gọi network kết thúc cho dù thành công hay thất bại.
     */
    complete?: Function;
  }
}
