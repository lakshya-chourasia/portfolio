import subprocess
import os

os.makedirs('public/images', exist_ok=True)

# Helper function to crop using ffmpeg
def crop_image(src, dst, w, h, x, y):
    cmd = [
        'ffmpeg', '-y',
        '-i', src,
        '-vf', f'crop={w}:{h}:{x}:{y}',
        dst
    ]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

# Coordinates inside the 1440x810 video frame:
# Remember inner browser window is approximately x=54, y=56, w=1330, h=736

# 1. Hero image: Michael portrait from hero.png
crop_image('public/extracted_assets/hero.png', 'public/images/hero_michael.png', 520, 600, 460, 110)

# 2. Hero Zentix card (orange donut sculpture)
crop_image('public/extracted_assets/hero.png', 'public/images/hero_zentix.png', 210, 260, 1070, 240)

# 3. Michael avatar from Let's Talk badge
crop_image('public/extracted_assets/hero.png', 'public/images/michael_avatar.png', 80, 80, 890, 630)

# 4. Impact photos from impact.png
crop_image('public/extracted_assets/impact.png', 'public/images/impact_motion.png', 240, 320, 350, 410)
crop_image('public/extracted_assets/impact.png', 'public/images/impact_red.png', 160, 210, 1070, 170)

# 5. Service images
crop_image('public/extracted_assets/services_1.png', 'public/images/service_uiux.png', 380, 300, 860, 260)
crop_image('public/extracted_assets/services_2.png', 'public/images/service_app.png', 380, 300, 860, 260)
crop_image('public/extracted_assets/services_3.png', 'public/images/service_product.png', 380, 300, 860, 260)

# 6. Portfolio project images
crop_image('public/extracted_assets/portfolio_1.png', 'public/images/project_zentix.png', 350, 350, 250, 260)
crop_image('public/extracted_assets/portfolio_1.png', 'public/images/project_lumio.png', 260, 260, 930, 260)
crop_image('public/extracted_assets/portfolio_2.png', 'public/images/project_arkio.png', 920, 440, 240, 200)
crop_image('public/extracted_assets/portfolio_3.png', 'public/images/project_novu.png', 250, 250, 250, 380)
crop_image('public/extracted_assets/portfolio_3.png', 'public/images/project_pulse.png', 360, 360, 840, 380)

# 7. Bento images from bento.png
crop_image('public/extracted_assets/bento.png', 'public/images/bento_silhouette.png', 340, 340, 840, 250)
crop_image('public/extracted_assets/bento.png', 'public/images/bento_avatar.png', 60, 60, 470, 560)

# 8. CTA glowing background from cta_footer.png
crop_image('public/extracted_assets/cta_footer.png', 'public/images/cta_bg.png', 950, 480, 240, 150)

# 9. About strip images from about_strip.png
crop_image('public/extracted_assets/about_strip.png', 'public/images/about_strip_1.png', 220, 330, 110, 440)
crop_image('public/extracted_assets/about_strip.png', 'public/images/about_strip_2.png', 220, 330, 370, 440)
crop_image('public/extracted_assets/about_strip.png', 'public/images/about_strip_3.png', 240, 330, 630, 440)
crop_image('public/extracted_assets/about_strip.png', 'public/images/about_strip_4.png', 240, 330, 910, 440)
crop_image('public/extracted_assets/about_strip.png', 'public/images/about_strip_5.png', 160, 330, 1190, 440)

# 10. Career images from career.png
crop_image('public/extracted_assets/career.png', 'public/images/career_framerdevs.png', 380, 280, 230, 460)
crop_image('public/extracted_assets/career.png', 'public/images/career_reddevs.png', 380, 280, 660, 460)

# 11. Blog images
crop_image('public/extracted_assets/blog_home.png', 'public/images/blog_teal_chair.png', 450, 450, 220, 460)
crop_image('public/extracted_assets/blog_home.png', 'public/images/blog_pumpkin_chair.png', 230, 230, 710, 580)
crop_image('public/extracted_assets/blog_home.png', 'public/images/blog_wood_chair.png', 230, 230, 980, 580)

crop_image('public/extracted_assets/blog_page_2.png', 'public/images/blog_synth.png', 280, 280, 720, 380)
crop_image('public/extracted_assets/blog_page_2.png', 'public/images/blog_clay.png', 280, 280, 280, 600)
crop_image('public/extracted_assets/blog_page_2.png', 'public/images/blog_stairs.png', 280, 280, 720, 600)

print('All cropped assets successfully created!')
