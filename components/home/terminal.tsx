export function Terminal() {
  return (
    <div className="mt-12 max-w-[620px] overflow-hidden rounded-lg border border-line2 bg-bg3">
      <div
        className="flex items-center gap-[7px] border-b border-line bg-white/[0.02] px-4 py-3"
        aria-hidden="true"
      >
        <span className="h-[9px] w-[9px] rounded-full bg-[#FF5F57]" />
        <span className="h-[9px] w-[9px] rounded-full bg-[#FFBD2E]" />
        <span className="h-[9px] w-[9px] rounded-full bg-[#27CA40]" />
        <span className="ml-2 font-mono text-[11px] text-faint">
          privileged run -- ephemeral container lifecycle
        </span>
        <span className="ml-auto h-2 w-2 rounded-full bg-accent" />
      </div>
      <div className="p-4 font-mono text-[12.5px] leading-[1.8] text-muted">
        <div>
          <span className="text-accent">$ privileged</span>{" "}
          <span>run --model client-vault:latest</span>
        </div>
        <div>
          <span className="text-faint">container:</span>{" "}
          <span className="text-blue">eph-a3f2b1c</span>
          {"  "}
          <span className="text-faint">ip:</span>{" "}
          <span className="text-amber">5.161.239.237</span>
          {"  "}
          <span className="text-faint">status:</span>{" "}
          <span className="text-blue">ready</span>
        </div>
        <div>
          <span className="text-faint">stream:</span> token-0 → token-1 → ...
          → token-n
        </div>
        <div>
          <span>stream closed</span> —{" "}
          <span className="text-accent">container decommissioned</span>
        </div>
        <div>
          <span className="text-faint">persistence:</span> none
          {"\u00A0|\u00A0"}
          <span className="text-faint">data written to disk:</span> 0 bytes
        </div>
      </div>
    </div>
  );
}
