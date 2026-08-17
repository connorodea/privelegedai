export function Terminal() {
  return (
    <div className="mt-12 max-w-[620px] overflow-hidden rounded-lg border border-navy2 bg-navy">
      <div
        className="flex items-center gap-[7px] border-b border-white/[0.06] px-4 py-3"
        aria-hidden="true"
      >
        <span className="h-[9px] w-[9px] rounded-full bg-[#FF5F57]" />
        <span className="h-[9px] w-[9px] rounded-full bg-[#FFBD2E]" />
        <span className="h-[9px] w-[9px] rounded-full bg-[#27CA40]" />
        <span className="ml-2 font-mono text-[11px] text-[#5C6378]">
          privileged run -- ephemeral container lifecycle
        </span>
        <span className="ml-auto h-2 w-2 rounded-full bg-green-bright" />
      </div>
      <div className="bg-transparent p-4 font-mono text-[12.5px] leading-[1.8] text-[#A7B0C8]">
        <div>
          <span className="text-green-bright">$ privileged</span>{" "}
          <span>run --model client-vault:latest</span>
        </div>
        <div>
          <span className="text-[#5C6378]">container:</span>{" "}
          <span className="text-blue-bright">eph-a3f2b1c</span>
          {"  "}
          <span className="text-[#5C6378]">ip:</span>{" "}
          <span className="text-amber-bright">5.161.239.237</span>
          {"  "}
          <span className="text-[#5C6378]">status:</span>{" "}
          <span className="text-blue-bright">ready</span>
        </div>
        <div>
          <span className="text-[#5C6378]">stream:</span> token-0 → token-1 →
          ... → token-n
        </div>
        <div>
          <span>stream closed</span> —{" "}
          <span className="text-green-bright">container decommissioned</span>
        </div>
        <div>
          <span className="text-[#5C6378]">persistence:</span> none
          {"\u00A0|\u00A0"}
          <span className="text-[#5C6378]">data written to disk:</span> 0 bytes
        </div>
      </div>
    </div>
  );
}
