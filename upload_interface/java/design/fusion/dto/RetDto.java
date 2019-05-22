package design.fusion.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
public class RetDto {
    private Boolean success;
    private String message;
    private String url;

    public RetDto(boolean b, String file_empty, String o) {
        this.success = b;
        this.message = file_empty;
        this.url =  o;
    }
}
