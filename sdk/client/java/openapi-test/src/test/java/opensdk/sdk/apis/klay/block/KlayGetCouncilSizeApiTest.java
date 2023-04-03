package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetCommitteeSizeResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayGetCouncilSizeApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    @Test
    @DisplayName("RPC klay_getCouncilSize")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetCommitteeSizeResponse gr = sdk.klay.getCouncilSize(
            "0x1b4")
        .send();
        gr.getResult();
    }
}
